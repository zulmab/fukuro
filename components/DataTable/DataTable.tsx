import { FC } from 'react'

export interface IDataTableProps {
  body: object[]
}

export const DataTable: FC<IDataTableProps> = ({ body }) => {
  return (
    <table>
      {body.map((element: any) => {
        return (
          <tr key={`${element.title}`}>
            <td>{element.title}: </td>
            <td>
              {element.value} {element.postfix}
            </td>
          </tr>
        )
      })}
    </table>
  )
}
