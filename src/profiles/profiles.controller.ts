import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  // GET /profiles
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }
  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    try {
      return this.profilesService.findOne(id);
    } catch (error) {
      throw new NotFoundException(
        (error instanceof Error ? error.message : String(error)) ||
          `Profile with id ${id} not found`,
      );
    }
  }

  // POST /profiles
  @Post()
  create(@Body(new ValidationPipe()) createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }
  // PUT /profiles/:id
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body(new ValidationPipe()) updateprofiledto: UpdateProfileDto,
  ) {
    return this.profilesService.update(id, updateprofiledto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.remove(id);
  }
}
