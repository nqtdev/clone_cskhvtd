import {ConfigProvider, Divider, Flex, Tag} from 'antd'
const TagSearch = () => (
  <>
    <ConfigProvider
      theme={{
        token: {
          fontSize: 18,
          paddingXXS: 6,
        },
      }}
    >
      <Divider orientation='left'>Tìm kiếm gần đây</Divider>
      <Flex gap='4px 0' wrap>
        <Tag color='magenta'>Tủ lạnh</Tag>
        <Tag color='red'>Nhà Bếp</Tag>
        <Tag color='volcano'>Nồi cơm điện</Tag>
        <Tag color='orange'>Lò vi sóng</Tag>
        <Tag color='gold'>Bàn chải</Tag>
        <Tag color='lime'>Máy hút bụi</Tag>
        <Tag color='green'>Khăn tắm</Tag>
        <Tag color='cyan'>Bồn tắm</Tag>
        <Tag color='blue'>Đồ trang trí</Tag>
        <Tag color='geekblue'>Cây giả</Tag>
        <Tag color='purple'>Kem đánh răng</Tag>
      </Flex>
      <Divider orientation='left'>Tìm kiếm nhiều</Divider>
      <Flex gap='4px 0' wrap>
        <Tag color='#f50'>Nồi cơm điện</Tag>
        <Tag color='#2db7f5'>Tủ sấy</Tag>
        <Tag color='#87d068'>Máy giặt</Tag>
        <Tag color='#108ee9'>Máy sấy</Tag>
        <Tag color='#ab005d'>Ấm đun nước</Tag>
        <Tag color='#65db3b'>Gia dụng tiện ích</Tag>
        <Tag color='#855fff'>Máy say - Máy ép</Tag>
        <Tag color='#d06887'>Nhà cửa đời sống</Tag>
        <Tag color='#68d07d'>Nồi - Xoong - Chảo</Tag>
        <Tag color='#b168d0'>Nồi áp suất</Tag>
        <Tag color='#a90015'>Nồi Cơm điện</Tag>
        <Tag color='#b0209a'>Thiết bị chăm sóc sức khoẻ</Tag>
      </Flex>
    </ConfigProvider>
  </>
)
export default TagSearch
