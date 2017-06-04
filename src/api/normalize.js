import flatMap from 'lodash/flatMap';
import first from 'lodash/first';

function normalizeMsrp(data) {
  const {
    baseMSRPValue,
    totalMSRPValue,
    destinationPriceValue,
    packageDiscountTotalValue,
    totalAccessoriesMsrpValue,
    totalOptionsMsrpValue,
    totalVehicleAndOptionsValue,
  } = data;

  return {
    base: baseMSRPValue,
    total: totalMSRPValue,
    destinationPrice: destinationPriceValue,
    packageDiscountTotal: packageDiscountTotalValue,
    accessoriesTotal: totalAccessoriesMsrpValue,
    optionsTotal: totalOptionsMsrpValue,
    vehicleAndOptionsTotal: totalVehicleAndOptionsValue
  }
}

function reduceToHash(arr = []) {
  return arr.reduce((hash, x) => {
    hash[x.id] = x;
    return hash
  }, {})
}

function findSelectedId(arr = []) {
  return first(arr.filter(x => x.selected).map(x => x.id))
}

export function normalizeFullConfig(data) {
  const { modelMatrix: model, config } = data;

  const colors = config.OPTIONS.COLOR;
  const exterior = config.OPTIONS.EXTERIOR;
  const interior = config.OPTIONS.INTERIOR;
  const accessories = config.ACCESSORIES;

  return {
    ss: decodeURIComponent(config['SERIALIZED-STATE']),
    msrp: normalizeMsrp(config.VEHICLE.MSRP),
    rpos: config.VEHICLE.SELECTED_RPO_LIST,
    lists: {
      bodyTypes: model.bodyTypes,
      driveTypes: model.driveTypes,
      engines: model.engine,
      styles: model.styleInformation,
      interiorColors: colors.interior.map(({ header: id, items }) => ({ id, options: items })),
      exteriorColors: colors.exterior.map(({ header: id, items }) => ({ id, options: items })),
      exterior: Object.keys(exterior)
        .map(key =>
          ({ id: key.replace('exterior.', ''), options: exterior[key] })
        ),
      interior: Object.keys(interior)
        .map(key =>
          ({ id: key.replace('interior.', ''), options: interior[key] })
        ),
      accessories: Object.keys(accessories)
        .map(key =>
          ({ id: key, options: accessories[key] })
        )
    },
    selections: {
      bodyType: findSelectedId(model.bodyTypes),
      driveType: findSelectedId(model.driveTypes),
      engine: findSelectedId(model.engine),
      style: findSelectedId(model.styleInformation),
      axleRatio: findSelectedId(model.axleRatio),
      transmission: findSelectedId(model.transmission),
      interiorColor: findSelectedId(flatMap(colors.interior, 'items')),
      exteriorColor: findSelectedId(flatMap(colors.exterior, 'items'))
    },
    entities: {
      bodyTypes: reduceToHash(model.bodyTypes),
      driveTypes: reduceToHash(model.driveTypes),
      engines: reduceToHash(model.engine),
      styles: reduceToHash(model.styleInformation),
      interiorColors: reduceToHash(flatMap(colors.interior, 'items')),
      exteriorColors: reduceToHash(flatMap(colors.exterior, 'items'))
    }
  }
}
