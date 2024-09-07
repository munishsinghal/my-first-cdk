export const handler = async (event: { name: string }) => {
    const result: string = event.name ? `Good Job ${event.name}` : 'Good job without event1'
    return result;
}