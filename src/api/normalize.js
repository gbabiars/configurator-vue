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

function reduceToHash(hash, x) {
  hash[x.id] = x;
  return hash;
}

export function normalizeFullConfig(data) {
  const { modelMatrix: model, config } = data;
  return {
    ss: decodeURIComponent(config['SERIALIZED-STATE']),
    msrp: normalizeMsrp(config.VEHICLE.MSRP),
    lists: {
      bodyTypes: model.bodyTypes.map(x => x.id),
      driveTypes: model.driveTypes.map(x => x.id),
      engines: model.engine.map(x => x.id),
      styles: model.styleInformation.map(x => x.id)
    },
    entities: {
      bodyTypes: model.bodyTypes.reduce(reduceToHash, {}),
      driveTypes: model.driveTypes.reduce(reduceToHash, {}),
      engines: model.engine.reduce(reduceToHash, {}),
      styles: model.styleInformation.reduce(reduceToHash, {})
    }
  }
}
