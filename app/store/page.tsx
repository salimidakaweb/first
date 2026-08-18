import React from 'react'
import ProductItems from '../comp/ProductItems'

function store() {

  const data = [
    {
      id: "1",
      image: "https://thumbs.dreamstime.com/b/funny-imge-happy-monkey-taking-selfie-surrounded-bananas-image-created-ai-generative-328552834.jpg",
      title: "product 1",
      description: " loremloreoremloremloremloremloremloremloremloremloremloremlor",
      price: 50
   }, {
      id: "2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1x5h5gadkEFq87qZEeiuVm64lx5yfflpoTtCU13ChEpnbFssnUBJhZGH&s=10",
      title: "product 2",
      description: " loremloremloremloremloremloremloremloremloremloremloremloremlor",
      price: 100
    }, {
      id: "3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNIS9My4sPZkoEMFokYBiIb6RPWqTGl1BMrXEi9WBsxIx2jlz7e3BImg&s=10",
      title: "product 3",
      description: " loremloremloremloremloremloremloremloremloremloremloremloremloremlor",
      price: 90
    }, {
      id: "4",
      image: "https://img.magnific.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?semt=ais_test_b&w=740&q=80",
      title: "product 4",
      description: " emloremloremloremloremloremloremloremloremloremloremloremloremlor",
      price: 40
    }
  ]


  return (
    <div>
      <h3 className="py-4 font-bold text-2xl">
        Store Page
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {
          data.map((item) => (
            <ProductItems key={item.id} {...item} />
          ))}
      </div>
    </div>
  )
}

export default store