export default function Header(){

    return(
        <div className="bg-blue-600  flex items-center justify-between p-2 text-black">
          <h1 className="text-left">Logo</h1>


        <div className="flex-1 flex justify-center">
          <div className="flex justify-center items-center w-full">
              <input type="text"
              placeholder="search here...."
              className="border border-gray-300 rounded-lg px-1 py-2 w-[300px] text-center"
              />
        </div>
            </div> 
          </div>
    )
};