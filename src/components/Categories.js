import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'screens',
                    name: 'Мониторы'
                },
                {
                    key: 'headphones',
                    name: 'Наушники'
                },
                {
                    key: 'keyboards',
                    name: 'Клавиатуры'
                },
                {
                    key: 'pcs',
                    name: 'Компьютеры'
                },
                {
                    key: 'mouses',
                    name: 'Мышки'
                },
                {
                    key: 'washings',
                    name: 'Стиральные машины'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories