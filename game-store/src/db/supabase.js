import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


const getAllItems = async() => {
    // (async function () {
    //   return ({ letdata: store_items, error } = await supabase
    //     .from("store_items")
    //     .select("*"));
    // })().then((value) => console.log(value));
    
    let { data, error } = await supabase
            .from("store_items")
            .select("*");
            if(error){
                console.log(error)
            }else{
                console.log(data)
            }
  };

  export {
    getAllItems
  }