import ParkedCar from "../entity/ParkedCar";
import IParkingLotRepository from "../repository/IParkingLotRepository";

export default class EnterParkingLot {
  constructor (private readonly parkingLotRepository: IParkingLotRepository) {}

  async execute (code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    const parkedCar = new ParkedCar(code, plate, date)
    if (!parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is closed") 
    if (parkingLot.isFull()) throw new Error("The parking lot is full") 
    this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date)
    return parkingLot;
  }
}