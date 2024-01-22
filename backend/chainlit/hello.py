# This is a simple example of a chainlit app.

# import plotly.graph_objects as go
# from element import ECharts           # added by jay for testing Echarts (Remove when push to github or it will give error)

from chainlit import AskUserMessage, Message, on_chat_start


@on_chat_start
async def main():
    res = await AskUserMessage(content="What is your name?", timeout=30).send()
    if res:
        # # Use the user's name in the message
        user_name = res["output"]

        # Create a hardcoded ECharts element (modify options based on your requirements)
        # echarts_options = {
        #     'xAxis': {'type': 'category', 'data': ['Category A', 'Category B', 'Category C']},
        #     'yAxis': {'type': 'value'},
        #     'series': [{'name': 'Series 1', 'type': 'bar', 'data': [1, 2, 3]}]
        # }

        # elements = ECharts(name=f"ECharts Element for {user_name}", display="inline", options=echarts_options)
        # fig = go.Figure(
        #     data=[go.Bar(y=[2, 1, 3])],
        #     layout_title_text="A Figure Displayed with fig.show()",
        # )
        # elements = Plotly(name="chart", figure=fig, display="inline")

        # Send a message with a customized greeting and the ECharts element
        await Message(
            content=f"Hello {user_name}, here's your EChart:",
            # elements=[elements],
        ).send()
