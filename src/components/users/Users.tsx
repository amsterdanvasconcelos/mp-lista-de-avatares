'use client';

import {
  AvatarCustomized,
  AvatarVariants,
  AvatarBorderVariants,
} from '@/components/ui/avatar';
import { generateUsers } from '@/lib/data';
import { Filters } from '@/components/users/Filters';
import { useState } from 'react';

const users = generateUsers(40);

const Users = () => {
  const [size, setSize] = useState<AvatarVariants['size']>('default');
  const [border, setBorder] =
    useState<AvatarBorderVariants['border']>('default');

  const space = {
    default: '[&>div]:-ml-3 ml-3',
    sm: '[&>div]:-ml-3 ml-3',
    lg: '[&>div]:-ml-8 ml-8',
    xl: '[&>div]:-ml-16 ml-16',
  };

  return (
    <div className="min-h-screen max-w-[800px] mx-auto pt-20">
      <div className="flex justify-between items-center">
        <Filters setSize={setSize} setBorder={setBorder} />
        <p className="text-xs">
          Criado por
          <a
            className="hover:text-gray-400"
            href="https://github.com/amsterdanvasconcelos"
            target="_blank"
          >
            {' '}
            Amsterdan Vasconcelos
          </a>
        </p>
      </div>
      <hr className="border border-blue-200 mt-8 mb-20" />
      <div
        className={`flex justify-center items-center flex-wrap p-4 ${
          space[size!]
        } [&>div]:my-2 select-none`}
      >
        {users.map(({ imgUrl, userName, fallbackText }) => (
          <AvatarCustomized
            key={userName}
            imgUrl={imgUrl}
            userName={userName}
            fallbackText={fallbackText}
            size={size}
            border={border}
          />
        ))}
      </div>
    </div>
  );
};

export { Users };
