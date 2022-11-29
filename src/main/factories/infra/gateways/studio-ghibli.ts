import { StudioGhibliApi } from "../../../../infra/gateways/studio-ghibli-api";

export const makeStudioGhibli = (): StudioGhibliApi => {
  return new StudioGhibliApi()
}