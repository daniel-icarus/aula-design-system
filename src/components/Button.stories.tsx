import { Meta, StoryObj } from '@storybook/react'
import {Button, ButtonProps} from './Button';

export default {
    title: 'Components/Button', 
    component: Button,
    args: {
        children: 'Click me',
    },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const CustomComponent: StoryObj<ButtonProps> = {
    args: {
        asChild: true,
        children: (
            <a href='#'>Click me</a>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
};