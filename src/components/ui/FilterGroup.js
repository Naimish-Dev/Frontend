import { useState } from 'react';
import FilterButton from './filterbtn';

const filters = [
  { id: 'video', label: 'Video', img: '/icons/ai-video.png' },
  { id: 'thread', label: 'Thread', img: '/icons/threads.png' },
  { id: 'article', label: 'Article', img: '/icons/news.png' },
  { id: 'meme', label: 'Meme', img: '/icons/cookie.png' },
];

export default function FilterGroup() {
  const [selected, setSelected] = useState([]);

  const toggleFilter = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const isActive = (id) => selected.includes(id);

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          label={filter.label}
          img={filter.img}
          active={isActive(filter.id)}
          onClick={() => toggleFilter(filter.id)}
        />
      ))}

      <FilterButton
        label="Deselect all"
        img={'/icons/multiplication-sign.png'}
        onClick={() => setSelected([])}
      />
    </div>
  );
}
