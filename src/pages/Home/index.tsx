import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import coffeeDelivery from '../../assets/coffeDelivery.svg'
import {
  BannerLayout,
  CardSection,
  ContentSectionDivLayout,
  ItemIconSectionLayout,
  ItensContentSectionLayout,
} from './styled.ts'
import { defaultTheme } from '../../styles/themes/default.ts'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeModel } from '../../models/CoffeeModel.ts'

export function Home() {
  const Coffees: CoffeeModel[] = [
    {
      id: '1',
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Americano.svg`,
    },
    {
      id: '2',
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Latte.svg`,
    },
    {
      id: '3',
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Capuccino.svg`,
    },
    {
      id: '4',
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Macchiato.svg`,
    },
    {
      id: '5',
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Mochaccino.svg`,
    },
    {
      id: '6',
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Chocolate_Quente.svg`,
    },
    {
      id: '7',
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Cubano.svg`,
    },
    {
      id: '8',
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Havaiano.svg`,
    },
    {
      id: '9',
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Arabe.svg`,
    },
    {
      id: '10',
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      imageUrl: `http://localhost:5173/coffees/Irlandes.svg`,
    },
  ]

  return (
    <>
      <BannerLayout>
        <ContentSectionDivLayout>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ItensContentSectionLayout>
            <div>
              <p>
                <ItemIconSectionLayout bgColor={defaultTheme['yellow-700']}>
                  <ShoppingCart size={16} weight={'fill'} />
                </ItemIconSectionLayout>
                Compra simples e segura
              </p>
              <p>
                <ItemIconSectionLayout bgColor={defaultTheme['gray-800']}>
                  <Package size={16} weight="fill" />
                </ItemIconSectionLayout>
                Embalagem mantém o café intacto
              </p>
            </div>
            <div>
              <p>
                <ItemIconSectionLayout bgColor={defaultTheme['yellow-500']}>
                  <Timer size={16} weight="fill" />
                </ItemIconSectionLayout>
                Entrega rápida e rastreada
              </p>
              <p>
                <ItemIconSectionLayout bgColor={defaultTheme['purple-700']}>
                  <Coffee size={16} weight="fill" />
                </ItemIconSectionLayout>
                O café chega fresquinho até você
              </p>
            </div>
          </ItensContentSectionLayout>
        </ContentSectionDivLayout>
        <img
          src={coffeeDelivery}
          alt="Copo de café com fundo amarelo e gãos de café ao lado"
        />
      </BannerLayout>

      <CardSection>
        <h2>Nossos cafés</h2>
        <div className="card">
          {Coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CardSection>
    </>
  )
}
