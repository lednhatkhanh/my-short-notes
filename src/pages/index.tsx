import * as React from 'react';
import { GetStaticPropsResult } from 'next';

type Note = {
  content: string;
};

type Db = {
  notes: Note[];
};

type Props = {
  notes: Note[];
};

function getRandomArrayItem<T>(arr: T[]): T | undefined {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function HomePage({ notes }: Props): React.ReactElement {
  const [todayNote, setTodayNote] = React.useState(() => getRandomArrayItem(notes));

  React.useEffect(() => {
    function handleNextButtonClicked() {
      setTodayNote((currentNote) => {
        let note = getRandomArrayItem(notes);
        while (note?.content === currentNote?.content) {
          note = getRandomArrayItem(notes);
        }

        return note;
      });
    }

    window.addEventListener('click', handleNextButtonClicked);

    return () => {
      window.removeEventListener('click', handleNextButtonClicked);
    };
  }, [notes]);

  return (
    <main className="flex items-center justify-center h-screen bg-primary">
      <section className="px-10 py-6 text-gray-700 bg-white bg-opacity-75 rounded-lg backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold leading-[3rem] text-primary">Here is a short note:</h1>

        {todayNote ? <div className="leading-10">{todayNote.content}</div> : null}

        <div className="h-5"></div>

        <div className="flex flex-col items-end">
          <span className="text-sm leading-6">(You can click anywhere to change note)</span>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const fs = await import('fs');
  const path = await import('path');
  const util = await import('util');
  const promisedReadFile = util.promisify(fs.readFile);
  const filePath = path.resolve(process.cwd(), 'db.json');
  const db = await promisedReadFile(filePath, {
    encoding: 'utf-8',
  });

  return {
    props: {
      notes: (JSON.parse(db) as Db).notes,
    },
  };
}
