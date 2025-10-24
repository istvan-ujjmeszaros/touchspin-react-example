# TouchSpin React Example

Standalone Vite + React 19 demo showcasing the `@touchspin/react` vanilla renderer.

## Getting Started

Install dependencies and launch the demo:

```bash
cd ../touchspin-react-example
npm install
npm run dev
```

Open the printed URL (default `http://localhost:5173/`) to try the number spinners. The example wires both controlled and uncontrolled components and imports the vanilla renderer CSS.

> Need to test unpublished bits? Swap the `@touchspin/react` dependency in `package.json` back to a local `file:` reference and rebuild the sibling `touchspin-react` package before installing.

## Scripts

- `npm run dev` – start Vite in dev mode
- `npm run build` – type-check and create a production bundle
- `npm run preview` – serve the production build locally
