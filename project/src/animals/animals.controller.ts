import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Animal } from './entities/animal.entity';
import { HttpExceptionFilter } from 'src/common/http-exception.filters';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post('create')
  @ApiOperation({ summary: 'Crear un nuevo animal' })
  @ApiBody({ type: CreateAnimalDto })
  @ApiResponse({ 
    status: 201, 
    description: 'El animal ha sido creado exitosamente',
    type: Animal
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @Get('')
  @ApiOperation({ summary: 'Obtener todos los animales' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de animales obtenida correctamente',
    type: [Animal]
  })
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un animal por ID' })
  @ApiParam({ name: 'id', description: 'ID del animal' })
  @ApiResponse({ 
    status: 200, 
    description: 'Animal encontrado',
    type: Animal
  })
  @ApiResponse({ status: 404, description: 'Animal no encontrado' })
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un animal' })
  @ApiParam({ name: 'id', description: 'ID del animal a actualizar' })
  @ApiBody({ type: UpdateAnimalDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Animal actualizado correctamente',
    type: Animal
  })
  @ApiResponse({ status: 404, description: 'Animal no encontrado' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalsService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un animal' })
  @ApiParam({ name: 'id', description: 'ID del animal a eliminar' })
  @ApiResponse({ status: 200, description: 'Animal eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Animal no encontrado' })
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }
}
