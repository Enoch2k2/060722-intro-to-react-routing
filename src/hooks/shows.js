import { useState } from "react"


export const useHandleChange = (defaultValue) => {
   const [state, setState] = useState(defaultValue);

   const handleChange = e => setState(e.target.value);

   return [state, handleChange];
}