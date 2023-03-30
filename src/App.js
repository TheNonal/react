import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Наушники Razer Barracuda X белый',
          img: 'razer_barracuda_white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'headphones',
          price: '5.599'
        },
        {
          id: 2,
          title: 'Монитор AOC Q27G2S/EU черный',
          img: 'aoc2_black.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'screens',
          price: '29.899'
        },
        {
          id: 3,
          title: 'Клавиатура ARDOR Patron красная',
          img: 'ardor_patron_red.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'keyboards',
          price: '6.999'
        },
        {
          id: 4,
          title: 'ПК ZET GAMING WARD H285',
          img: 'zet_ward.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'pc',
          price: '86.999'
        },
        {
          id: 5,
          title: 'Мышь беспроводная LAMZU Atlantis белый',
          img: 'lamzu_atlantis_white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'mouses',
          price: '5.999'
        },
        {
          id: 6,
          title: 'Наушники A4Tech Bloody G575 желтый',
          img: 'a4tech_bloody_yellow.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'headphones',
          price: '3.199'
        },
        {
          id: 7,
          title: 'Клавиатура ARDOR Patron фиолетовая',
          img: 'ardor_patron_purple.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'keyboards',
          price: '6.999'
        }

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
  
}

export default App;
