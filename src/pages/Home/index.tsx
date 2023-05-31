import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import coffeeDelivery from '../../assets/coffeDelivery.svg'
import {
  BannerLayout,
  ContentSectionDivLayout,
  ItemIconSectionLayout,
  ItensContentSectionLayout,
} from './styled.ts'
import { defaultTheme } from '../../styles/themes/default.ts'

export function Home() {
  return (
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
  )
}
