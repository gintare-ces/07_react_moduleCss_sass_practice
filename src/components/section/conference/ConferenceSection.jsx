import React, {  useState } from 'react';
import SectionTitle from '../../title/SectionTitle';
import ConferenceButton from './filterItem/ConferenceButton';
// import ConferenceCard from './ConferenceCard';
import css from './ConferenceSection.module.css';
import Grid from '../../ui/grid/Grid';
import ConferenceCard from './conferenceList/ConferenceCard';

const initFilters = [
  { id: 1, title: 'Day 1', date: '2020-02-02', isActive: true },
  { id: 2, title: 'Day 2', date: '2020-02-05', isActive: false },
  { id: 3, title: 'Day 3', date: '2020-02-06', isActive: false },
];

const initConferences = [
  {
    time: '10:30 - 12:30 AM',
    room: 'Room 2',
    title: 'Opening Conference',
    speaker: 'Hanson Deck',
    img: 'https://picsum.photos/200/300',
    date: '2020-02-02',
  },

  {
    time: '12:30 - 14:30 AM',
    room: 'Room 1',
    title: 'Digital World Event Information',
    speaker: 'Hanson Deck',
    img: 'https://picsum.photos/200/300',
    date: '2020-02-06',
  },

  {
    time: '10:30 - 12:30 AM',
    room: 'Room 2',
    title: 'Digital Marketing Theory',
    speaker: 'Hanson Deck',
    img: 'https://picsum.photos/200/300',
    date: '2020-02-05',
  },
];
function ConferenceSection() {
  const [filters, setFilters] = useState(initFilters);

// kai reiksme tiesiogiai priklauso nuo state tai nekuriam jai papildomo state
  const activeDate = filters.find((fObj) => fObj.isActive).date
    console.log('activeDate ===', activeDate);

    const filteredConferences = initConferences.filter((cObj) => cObj.date === activeDate )
  function handleToggleFilter(idOfToggleEl) {
    console.log('idOfToggleEl ===', idOfToggleEl);
    // pakeisti to elemento ant kurio paspausta isActive i priesinga
    // fisu kitu i false
    setFilters((prevFilter) =>
      prevFilter.map((fObj) => {
        if (fObj.id === idOfToggleEl) {
          return { ...fObj, isActive: !fObj.isActive };
        }
        return { ...fObj, isActive: false };
      }),
    );
  }

  return (
    <section className={css.section}>
      <div className="container">
        <SectionTitle title={'Schedule'} subtitle={'Conference schedule'} />
        <Grid className={css.control}>
          {filters.map((fObj) => (
            <ConferenceButton
              key={fObj.id}
              title={fObj.title}
              date={fObj.date}
              isActive={fObj.isActive}
              onToggle={() => {
                handleToggleFilter(fObj.id);
              }}
            />
          ))}

          {/* <ConferenceCard /> */}
        </Grid>
        <ConferenceCard list={filteredConferences}/>
      </div>
    </section>
  );
}

export default ConferenceSection;
