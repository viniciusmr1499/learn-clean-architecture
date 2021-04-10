import IParkingLotRepository from "../repository/IParkingLotRepository";

export default class GetParkingLot {
  constructor (
    private readonly parkingRepository: IParkingLotRepository,
  ) {}

  execute (code: string) {
    return this.parkingRepository.getParkingLot(code);
  }
}