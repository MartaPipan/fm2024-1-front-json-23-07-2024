import React, { useMemo } from 'react'
import packagesData from './data/packagesData.json'
import YouTubeIframe from '../YoutubeIframe'
import styles from './PackageOptions.module.sass'

// Função para gerar subitens
const useSubItems = (subItems) => {
  return useMemo(() => (
    <ul className={styles.subItems}>
      {subItems.map((subItem, j) => (
        <li key={j} className={styles.subItem}>
          <img src="./public/staticImages/pricePackageImage/yes.png" alt="check-circle" />
          <span className={styles.tooltip}>
            {subItem.text}
            <span className={styles.tooltiptext}>{subItem.comment}</span>
          </span>
          {subItem.link && (
            <div className={styles.linkContainer}>
              <a href={subItem.link[0].href} target="_blank" rel="noopener noreferrer">
                {subItem.link[1].view}
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  ), [subItems])
}

// Função para gerar itens
const useItems = (items) => {
  return useMemo(() => (
    <ul className={styles.items}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <img src="./public/staticImages/pricePackageImage/tick.png" alt="tick" />
          {item.text}
          {item.subItems && useSubItems(item.subItems)}
          {item.link && (
            <div className={styles.linkContainer}>
              <a href={item.link[0].href} target="_blank" rel="noopener noreferrer">
                {item.link[1].view}
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  ), [items])
}

// Função para obter a classe do pacote com base no nome
const usePackageClass = (name) => {
  return useMemo(() => styles[name.toLowerCase()], [name])
}

// Função para renderizar um pacote
const useRenderPackage = (pkg, index) => {
  const packageClass = usePackageClass(pkg.name)
  const items = useItems(pkg.items)
  return (
    <div key={index} className={`${styles.package} ${packageClass}`}>
      {pkg.best && <div className={styles.bestValue}>Best Value</div>} {/* Add "Best Value" label */}
      <img src={pkg.image} alt={pkg.alt} />
      <h2>{pkg.name}</h2>
      <p>{pkg.title}</p>
      <h3>{pkg.price}</h3>
      <button>
        {pkg.button}
        <img src="./public/staticImages/next-white.svg" alt="next" />
      </button>
      {items}
    </div>
  )
}


// Função para renderizar todos os pacotes
const useRenderPackages = () => {
  return useMemo(() => (
    packagesData.map((pkg, index) => (
      <div key={index} className={styles.packageContainer}>
        {useRenderPackage(pkg, index)}
        {index === 0 && (
          <div className={styles.videoContainer}>
            <YouTubeIframe videoId="BK9RA3ASsB8" start={3} />
          </div>
        )}
      </div>
    ))
  ), [])
}

// Componente principal
const PackagesOptions = () => {
  const packageList = useRenderPackages()

  return (
    <section className={styles.packages}>
      {packageList}
    </section>
  )
}

export default PackagesOptions
