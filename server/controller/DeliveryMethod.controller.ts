import { Router, Request, Response } from 'express';
import { DeliveryMethodModel } from '../model/DeliveryMethod';
import { DeliveryMethodDto } from '../dto/DeliveryMethod.dto';

export class DeliveryMethodController {
  private readonly model: DeliveryMethodModel;
  constructor(router: Router) {
    this.model = new DeliveryMethodModel();
    this.api(router);
  }

  private api(router: Router): void {
    router.get('/api/delivery', async (req: Request, res: Response) => {
      // const result: DeliveryMethodDto[] = await this.model.getAll();
      //TODO:
      const mock: DeliveryMethodDto[] = [
        { id: 1, name: '7-11店到店' },
        { id: 2, name: '宅配' },
      ];
      res.status(200).json({ success: true, content: mock });
    });
  }
}