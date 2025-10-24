# TouchSpin React Example

Standalone Vite + React 19 demo showcasing the `@touchspin/react` vanilla renderer.

## Getting Started

Because the published React adapter is still in alpha, this example consumes the local library source. Make sure the sibling `touchspin-react` repo has been built before installing:

```bash
cd ../touchspin-react/packages/react
npm install
npm run build
```

Then install dependencies and launch the demo:

```bash
cd ../touchspin-react-example
npm install
npm run dev
```

Open the printed URL (default `http://localhost:5173/`) to try the number spinners. The example wires both controlled and uncontrolled components and imports the vanilla renderer CSS.

## Scripts

- `npm run dev` – start Vite in dev mode
- `npm run build` – type-check and create a production bundle
- `npm run preview` – serve the production build locally
