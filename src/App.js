import React from 'react'
import NitTable,{ExampleComponent} from 'nit-table'
export const App = () => {
  const data=[
    {
      name:'s1',
      rno:1
    },
    {
      name:'s2',
      rno:2
    }
  ]

  return (
    <div>
        <h1>Hellow Worldddddd</h1>
        <ExampleComponent />
        <NitTable headers={['Std Name','Std rno']} data={data} columns={['name','rno']} />
    </div>
  )
}
