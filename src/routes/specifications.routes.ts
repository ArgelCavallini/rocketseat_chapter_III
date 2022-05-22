import { Router } from 'express';

import { SpecificatiosRepository } from '../modules/cars/repositories/implementations/SpecificatiosRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificatiosRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);
  
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
