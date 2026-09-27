import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { config, GRADES, homeHref, type Grade } from './data';
import { Home } from './pages/Home';
import { LessonPage } from './pages/LessonPage';
import { NotFound } from './pages/NotFound';
import { SubjectPage } from './pages/SubjectPage';
import { navigate, useRoute } from './router';
import { loadPref, savePref } from './storage';

export function App() {
  const route = useRoute();
  // Clasa aleasă ultima dată pe acest dispozitiv se redeschide la următoarea vizită.
  const [grade, setGrade] = useState<Grade>(() => loadPref('grade', GRADES, config.defaultGrade));
  const [query, setQuery] = useState('');

  // O adresă cu clasa în ea (#/clasa-6/…) schimbă și clasa selectată.
  const routeGrade = route.page === 'home' ? undefined : route.grade;
  useEffect(() => {
    if (routeGrade) setGrade(routeGrade);
  }, [routeGrade]);

  useEffect(() => savePref('grade', grade), [grade]);

  // Din paginile interioare, schimbarea clasei sau căutarea duc înapoi la pagina de start.
  const changeGrade = (g: Grade) => {
    setGrade(g);
    navigate(homeHref);
  };
  const changeQuery = (q: string) => {
    setQuery(q);
    navigate(homeHref);
  };

  return (
    <div className="page">
      <Header grade={grade} onGradeChange={changeGrade} query={query} onQueryChange={changeQuery} />
      {route.page === 'home' && <Home grade={grade} query={query} />}
      {route.page === 'subject' && <SubjectPage grade={route.grade} slug={route.subject} />}
      {route.page === 'lesson' && (
        <LessonPage grade={route.grade} subjectSlug={route.subject} lessonSlug={route.lesson} />
      )}
      {route.page === 'notFound' && <NotFound />}
    </div>
  );
}
