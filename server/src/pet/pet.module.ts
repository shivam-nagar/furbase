import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PetModuleBase } from "./base/pet.module.base";
import { PetService } from "./pet.service";
import { PetController } from "./pet.controller";
import { PetResolver } from "./pet.resolver";

@Module({
  imports: [PetModuleBase, forwardRef(() => AuthModule)],
  controllers: [PetController],
  providers: [PetService, PetResolver],
  exports: [PetService],
})
export class PetModule {}
