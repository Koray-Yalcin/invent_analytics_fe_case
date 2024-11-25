## Invent Analytics FE Case Documentation

Inside of invent_analytics_fe_case project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   │     └── Filter.tsx
│   │   │     └── MoviesTable.tsx
│   │   │     └── Paginate.tsx
│   ├── pages/
│   │   │     └── Movies.tsx
│   │   │     └── MovieDetail.tsx
│   └── store/
│   │   └── slices/
│   │   │     └── movieSlice.ts 
│   │   └── store.ts
│   ├── types/
│   │   └── movie.d.ts
└── App.scss
└── App.tsx
└── index.tsx
└── .env.example
└── tsconfig.json
└── package.json
```

## .env

REACT_APP_OMDB_API_KEY=e8470ed8

## Deployment

Deployed by Vercel.

https://invent-analytics-fe-case.vercel.app/

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm start`            | Starts local dev server at `localhost:3000`        |
