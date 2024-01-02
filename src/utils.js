export function getTheme(ShipmentState) {

    return ShipmentState === "CANCELLED" ?
    "error" : ShipmentState === "DELIVERED" ?  "success" : "warning"

}