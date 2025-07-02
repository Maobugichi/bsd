import { List } from "../components/list"

export const ListItem = () => {
    const listItems = ['Home' , 'Projects' ,'Services','About']
    return(
        <ul className="flex md:flex-row flex-col md:h-full h-[40%] mt-20 md:mt-0 text-lg justify-between p-6 md:items-center  md:w-1/2">
            {listItems.map((item:string) => <List content={item} className=""/>)}
        </ul>
    )
}