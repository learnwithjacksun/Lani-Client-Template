import { Box, Grid, OrderCard } from "@/Components/Main";
const RecentOrders = () => {
  return (
    <>
    <Box title="Recent Orders" linkText="View All" link="/history">
        <Grid>
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </Grid>
    </Box>
    </>
  )
}

export default RecentOrders