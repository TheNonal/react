import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Наушники Razer Barracuda X белый',
          img: 'razer_barracuda_white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'headphones',
          price: '5599'
        },
        {
          id: 2,
          title: 'Монитор AOC Q27G2S/EU черный',
          img: 'aoc2_black.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'screens',
          price: '29899'
        },
        {
          id: 3,
          title: 'Клавиатура ARDOR Patron красная',
          img: 'ardor_patron_red.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'keyboards',
          price: '6999'
        },
        {
          id: 4,
          title: 'ПК ZET GAMING WARD H285',
          img: 'zet_ward.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'pcs',
          price: '86999'
        },
        {
          id: 5,
          title: 'Мышь беспроводная LAMZU Atlantis белый',
          img: 'lamzu_atlantis_white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'mouses',
          price: '5999'
        },
        {
          id: 6,
          title: 'Наушники A4Tech Bloody G575 желтый',
          img: 'a4tech_bloody_yellow.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'headphones',
          price: '3199'
        },
        {
          id: 7,
          title: 'Клавиатура ARDOR Patron фиолетовая',
          img: 'ardor_patron_purple.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'keyboards',
          price: '6999'
        }

      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState ({currentItems: this.state.items})
      return
    }

    this.setState ({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
