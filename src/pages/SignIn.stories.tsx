import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from 'msw';
import { SignIn } from './SignIn';

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  parameters: {
    msw: {
        handlers: [
            rest.post('/sessions', (req, res, ctx) => {
                return res(ctx.json({
                    message: 'Login realizado'
                }))
            })
        ]
    }
  }
} as Meta;

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'user@email.com');
        userEvent.type(canvas.getByPlaceholderText('******'), '12345678');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument();
        })
    }
};
