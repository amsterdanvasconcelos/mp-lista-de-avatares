import { Dispatch, SetStateAction } from 'react';
import { AvatarVariants, AvatarBorderVariants } from '../ui/avatar';

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

type FiltersProps = {
  setSize: Dispatch<SetStateAction<AvatarVariants['size']>>;
  setBorder: Dispatch<SetStateAction<AvatarBorderVariants['border']>>;
};

const Filters = ({ setSize, setBorder }: FiltersProps) => {
  return (
    <div className="flex gap-10">
      <Select onValueChange={(size) => setSize(size as AvatarVariants['size'])}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Tamanho" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Padrão</SelectItem>
          <SelectItem value="sm">Pequeno</SelectItem>
          <SelectItem value="lg">Grande</SelectItem>
          <SelectItem value="xl">Extra Grande</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(border) =>
          setBorder(border as AvatarBorderVariants['border'])
        }
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Border" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Padrão</SelectItem>
          <SelectItem value="none">Sem bordar</SelectItem>
          <SelectItem value="white">Branca</SelectItem>
          <SelectItem value="yellow">Amarela</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export { Filters };
