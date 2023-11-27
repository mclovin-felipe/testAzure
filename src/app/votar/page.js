import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import Votacion1 from "./components/votacion1";
const Page = () => {

    return (
        <div className="flex flex-col  space-y-3 p-3" >
            <h2 className="text-5xl font-bold  " >Votar</h2>
            <div className="h-1 bg-gray-300 w-100 rounded" ></div>
            <h3>
                Debes elegir a los mejores acompañantes en las siguientes categorías.
            </h3>
            <Typography variant="h6" >Categoria "Mejor compañero"</Typography>
            <Votacion1 />
            <Typography variant="h6" >Categoria "Mejor compañero"</Typography>
            <Votacion1 />
            <Typography variant="h6" >Categoria "Mejor compañero"</Typography>
            <Votacion1 />
            <Typography variant="h6" >Categoria "Mejor compañero"</Typography>
            <Votacion1 />
            <Stack>
                <Button variant="contained" >Votar</Button>
            </Stack>



        </div>
    )
}
export default Page;