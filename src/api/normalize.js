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

export function normalizeFullConfig(data) {
  return {
    msrp: normalizeMsrp(data.config.VEHICLE.MSRP)
  }
}
