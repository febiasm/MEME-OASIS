import React, { useState } from 'react';

function DropdownMenu({ title, facts }) {
const [isOpen, setIsOpen] = useState(false);

return (
<div className="dropdown">
<div className="dropdown__title flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
<h2 className="text-lg font-bold">{title}</h2>
<span>{isOpen ? '▲' : '▼'}</span>
</div>
{isOpen && (
<div className="dropdown__content mt-2">
{facts.map((fact, index) => (
<p key={index} className="text-sm">{fact}</p>
))}
</div>
)}
</div>
);
}

const MEME_FACTS = [
'The word "meme" was coined by Richard Dawkins in his 1976 book "The Selfish Gene".',
'The first recorded use of the word "meme" in the modern sense was in 1993 by Mike Godwin.',
'The most popular meme of all time is "LOLcats", which originated in 2005.',
];

const INTERNET_FACTS = [
'The first website ever created was info.cern.ch, which went live in 1991.',
'The first blog was created in 1994 by a college student named Justin Hall.',
'The first YouTube video was uploaded in 2005 and was titled "Me at the zoo".',
];

const TECH_FACTS = [
'The first computer mouse was invented in 1963 by Douglas Engelbart.',
'The first Apple computer, the Apple I, was released in 1976 and cost $666.66.',
'The first domain name ever registered was symbolics.com in 1985.',
];

const SPACE_FACTS = [
'There is a planet called 55 Cancri e made out of diamonds.',
'The Apollo 11 moon landing in 1969 was watched by over 600 million people worldwide.',
'The International Space Station travels at a speed of 28,000 km/h (17,500 mph).',
];

const ANIMAL_FACTS = [
'Pigs can get sunburned.',
'A group of flamingos is called a flamboyance.',
'A group of crows is called a murder.',
];

const FOOD_FACTS = [
'The world’s most expensive pizza costs $12,000 and is made in New York City.',
'The hottest chili pepper in the world is the Carolina Reaper.',
'The first chocolate bar was made in 1842 in England.',
];

function MemesDropdown() {
  return (
    <div className="card-container">
      <div className="w-100 card bg-white rounded-lg shadow-lg p-4">
  <div className="card__header mb-4">
    <h1 className="text-xl font-bold">Fun Facts</h1>
  </div>
  <div className="card__body">
    <DropdownMenu title="Meme Facts" facts={MEME_FACTS} />
    <DropdownMenu title="Internet Facts" facts={INTERNET_FACTS} />
    <DropdownMenu title="Tech Facts" facts={TECH_FACTS} />
    <DropdownMenu title="Space Facts" facts={SPACE_FACTS} />
    <DropdownMenu title="Animal Facts" facts={ANIMAL_FACTS} />
    <DropdownMenu title="Food Facts" facts={FOOD_FACTS} />
  </div>
</div>
    </div>
  );
}

export default MemesDropdown;
