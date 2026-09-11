import { Link, useParams } from "react-router-dom";

const lessons = [
  { id: 1, title: "Router basics", body: "BrowserRouter wraps the app." },
  { id: 2, title: "Routes", body: "Each Route matches a path to a page." },
  { id: 3, title: "NavLink", body: "Gets an active class automatically." },
  { id: 4, title: "404", body: "Catch-all '*' route." },
];

const RouterLessonDetail = () => {
  const { lessonId } = useParams();
  const lesson = lessons.find((l) => l.id === Number(lessonId));

  if (!lesson) {
    return (
      <section>
        <h2>Lesson not found</h2>
        <Link to="/router">Back to lessons</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{lesson.title}</h2>
      <p>{lesson.body}</p>
      <p>
        Path param read with <code>useParams</code>: <code>{lessonId}</code>
      </p>
      <Link to="/router">Back to lessons</Link>
    </section>
  );
};

export default RouterLessonDetail;