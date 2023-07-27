'use client'

import { DISCOVERED_IN_POLAND } from '@/static-data/discovered-in-poland'
import Link from 'next/link'
import { useState } from 'react'



const PolandPage = () => {
  const [userTextQuery, userTextQuerySet] = useState('')

  const filteredDiscoveries = DISCOVERED_IN_POLAND.filter((item) => {
    const lowerCaseQuery = userTextQuery.toLocaleLowerCase()
    return (
      item.name.toLocaleLowerCase().includes(lowerCaseQuery) ||
      item.url.toLocaleLowerCase().includes(lowerCaseQuery) ||
      item.emoji.toLocaleLowerCase().includes(lowerCaseQuery)
    )
  })

  return (
    <div>
      <article className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">Discoverd in Poland 🇵🇱</h1>
        <p>
          In the following I created a list of my discoveries while I am living
          in Poland as a personal reference which I am going to update every
          time that I find something new again. Among them, you will find
          variety of different things from great artists that I have never heard
          about them before arriving here or just a beautiful corner of a town
          or a bar!
        </p>
      </article>
      <div className="flex flex-col gap-5">
        <input
          className="my-5 w-full rounded-md border border-gray-300 p-2"
          type="text"
          placeholder="Search"
          value={userTextQuery}
          name="userTextQuery"
          onChange={(e) => userTextQuerySet(e.target.value)}
        />
        <section>
          <ul className="flex flex-col gap-2">
            {filteredDiscoveries.length
              ? filteredDiscoveries.map((p) => (
                  <li key={p.name} className='hover:text-gray-500 transition-all duration-300'>
                    <span>{p.emoji}</span>
                    {` `}
                    {p.name}
                    {` `}
                    {p.url ? (
                      <Link href={p.url} target="_blank">
                        &#10138;
                      </Link>
                    ) : (
                      ''
                    )}
                  </li>
                ))
              : 'No result!'}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default PolandPage
