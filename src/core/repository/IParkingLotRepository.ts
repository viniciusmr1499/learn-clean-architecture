import ParkingLot from '../entity/ParkingLot'

export default interface IParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot>
  saveParkedCar(code: string, plate: string, date: Date): void
}