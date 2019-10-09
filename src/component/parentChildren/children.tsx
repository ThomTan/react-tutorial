import * as React from 'react'

interface OwnProps {
  list: Text[]
}

export interface Text {
  id: number
  txt: string
}

export const Children: React.SFC<OwnProps> = props => {
  return (
    <div>
      <ul>
        {props.list.map(g => (
          <li key={g.id}>{g.txt}</li>
        ))}
      </ul>
    </div>
  )
}
