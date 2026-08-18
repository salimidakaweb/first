import React from 'react'

function store() {
  return (
    <div>
      <h3 className="py-4 font-bold text-2xl">
        Store Page
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="shadow-lg p-4 rounded-lg">
          <img src="https://thumbs.dreamstime.com/b/funny-imge-happy-monkey-taking-selfie-surrounded-bananas-image-created-ai-generative-328552834.jpg" alt="" />
          <div className="p-4">
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Price: 10$</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default store