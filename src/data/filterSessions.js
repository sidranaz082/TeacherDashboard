export function filterSessions(sessions, { search = '', course = 'All Courses', date = '' } = {}) {
  return sessions.filter(s => {
    const matchSearch = !search || s.id.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase());
    const matchCourse = course === 'All Courses' || s.course === course;
    const matchDate = !date || s.date.includes(date);
    return matchSearch && matchCourse && matchDate;
  });
}
