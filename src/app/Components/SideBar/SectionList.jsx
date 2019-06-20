import React, {useState} from "react"

const SectionList = ({type}) => {

    return (
      <div>
      
      </div>
    )
}


const Item = ({itemTitle}) => {

  const [isChecked, setCheck] = useState(false);

  return (
      <li className="section-list__item">
          <input 
            type="checkbox" 
            checked={isChecked}
            onChange={() => setCheck(!isChecked)}
          />
          <span>{itemTitle}</span>
      </li>
  )
}

SectionList.defaultProps = {
    type: "film"
}

Item.defaultProps = {
  itemTitle: "George Martin"
}

export default SectionList;