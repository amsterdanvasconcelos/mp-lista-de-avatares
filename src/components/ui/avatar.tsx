'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const avatarVariants = cva('bg-transparent border-[#09113f]', {
  variants: {
    size: {
      default: 'h-10 w-10 border-2',
      sm: 'h-8 w-8 border-2',
      lg: 'h-20 w-20 border-4',
      xl: 'h-30 w-30 border-4',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type AvatarVariants = VariantProps<typeof avatarVariants>;

const avatarBorderVariants = cva('absolute rounded-full bg-gradient-to-r', {
  variants: {
    size: {
      default: '-inset-[1.5px]',
      sm: '-inset-[1.5px]',
      lg: '-inset-0.5',
      xl: '-inset-1',
    },
    border: {
      default: 'from-[#78d993] to-[#e087ff]',
      none: 'inset-0',
      white: 'from-[#fff] to-[transparent]',
      yellow: 'from-[#e6cc43] to-[#968400]',
    },
  },
  defaultVariants: {
    size: 'default',
    border: 'default',
  },
});

type AvatarBorderVariants = VariantProps<typeof avatarBorderVariants>;

type AvatarCustomizedProps = {
  imgUrl: string;
  userName: string;
  fallbackText: string;
};

const AvatarCustomized = ({
  imgUrl,
  userName,
  fallbackText,
  size,
  border,
}: AvatarCustomizedProps & AvatarVariants & AvatarBorderVariants) => (
  <div className="relative inline-block item-avatar">
    <div className={cn(avatarBorderVariants({ size, border }))} />
    <Avatar className={cn(avatarVariants({ size }))}>
      <AvatarImage src={imgUrl} alt={`Avatar do ${userName}`} />
      <AvatarFallback className="text-[#000]">{fallbackText}</AvatarFallback>
    </Avatar>
  </div>
);

export type { AvatarVariants, AvatarBorderVariants };
export { Avatar, AvatarImage, AvatarFallback, AvatarCustomized };
