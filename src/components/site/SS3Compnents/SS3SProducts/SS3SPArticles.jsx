import React from 'react'

const SS3SPArticles = () => {
    return (
        <article
          className="
                      herald-lay-i
                      post-96
                      product
                      type-product
                      status-publish
                      has-post-thumbnail
                      product_cat-albums product_cat-music
                      instock
                      downloadable
                      shipping-taxable
                      purchasable
                      product-type-simple
                    "
        >
          <div className="herald-post-thumbnail">
            <a
              href="https://demo.mekshq.com/herald/?product=woo-album-4"
              title="Woo Album #4"
            >
              <img
                width="300"
                height="300"
                src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2013/06/cd_5_angle-300x300.jpg"
                className="
                            attachment-shop_catalog
                            size-shop_catalog
                            wp-post-image
                          "
                alt=""
                loading="lazy"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </a>
          </div>

          <div className="entry-header">
            <span className="meta-category meta-small">
              <a
                href="https://demo.mekshq.com/herald/?product_cat=albums"
                rel="tag"
              >
                Albums
              </a>
              <span>&bull;</span>
              <a
                href="https://demo.mekshq.com/herald/?product_cat=music"
                rel="tag"
              >
                Music
              </a>
            </span>

            <h2 className="entry-title h5">
              <a href="https://demo.mekshq.com/herald/?product=woo-album-4">
                Woo Album #4
              </a>
            </h2>
            <div className="entry-meta">
              <span className="price">
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    <span className="woocommerce-Price-currencySymbol">
                      &#36;
                    </span>
                    9.00
                  </bdi>
                </span>
              </span>
            </div>
          </div>
        </article>
    )
}

export default SS3SPArticles
