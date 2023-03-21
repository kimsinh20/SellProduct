import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import { Box, Tab } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useResolvedPath } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories) {
    return { name, calories };
}

const ProductDetailMenu = ({ product }) => {
    const url = useResolvedPath("").pathname;
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const rows = [
        createData('Dung lượng pin', '5000 mAh'),
        createData('Bluetooth', 'v5.3'),
        createData('Thương hiệu', product.brand.brandName),
        createData('Xuất xứ thương hiệu ', '	Hàn Quốc'),
        createData('Camera sau ', '	Chính 200 MP & Phụ 12 MP, 10 MP, 10 MP'),
        createData('Camera trước ', '	12 MP'),
        createData('Chip đồ họa (GPU)', '	Adreno 740'),
        createData('Chip set', '	Snapdragon 8 Gen 2 8 nhân'),
        createData('Kết nối khác', '	OTG, NFC'),
        createData('Tốc độ CPU', '	1 nhân 3.36 GHz, 4 nhân 2.8 GHz & 3 nhân 2 GHz'),
        createData('Đèn Flash', '	Có'),
        createData('Kích thước', 'Dài 163.4 mm - Ngang 78.1 mm - Dày 8.9 mm'),
        createData('Loại/ Công nghệ màn hình', '	Dynamic AMOLED 2X'),
        createData('Ghi âm', '	Ghi âm mặc định, Ghi âm cuộc gọi'),
        createData('GPS', '	GLONASS, GPS , GALILEO, BEIDOU'),
        createData('Hỗ trợ 5G', '	Có'),
        createData('Phụ kiện đi kèm', '	Hộp, sách hướng dẫn, cây lấy sim, Cáp Type C, Cây lấy SIM'),
        createData('Jack tai nghe', '	Type-C'),
        createData('Loại pin', '	Li - Ion'),
        createData('Loại Sim', '	2 Nano SIM hoặc 1 Nano SIM + 1 eSIM'),
        createData('Chất liệu', '	Khung nhôm & Mặt lưng kính cường lực'),
        createData('Nghe nhạc', '	AMR , AAC, WAV, OGG, MP3 , Midi , M4A'),
        createData('Xuất xứ', '	Trung Quốc'),
        createData('Cổng sạc', '	Type-C'),
        createData('Quay phim', '	FullHD 1080p@240fps, FullHD 1080p@60fps, FullHD 1080p@30fps, 4K 2160p@30fps, 4K 2160p@60fps, 8K 4320p@30fps, HD 720p@960fps'),
        createData('RAM', '	12 GB'),
        createData('Độ phân giải', '	2K+ (1440 x 3088 Pixels)'),
        createData('ROM', '	512 GB'),
        createData('Kích thước màn hình', '	6.8 inch'),
        createData('Tính năng camera', '	Quay Siêu chậm (Super Slow Motion), Chuyên nghiệp (Pro), Tự động lấy nét (AF), HDR, Toàn cảnh (Panorama), Ảnh Raw, Ban đêm (Night Mode), Zoom quang học, Làm đẹp, Live Photo, Bộ lọc màu, Trôi nhanh thời gian (Time Lapse), Góc siêu rộng (Ultrawide), Góc rộng (Wide), Quay chậm (Slow Motion), Xóa phông, Zoom kỹ thuật số, Chống rung quang học (OIS)'),
        createData('Wifi', '	Dual-band (2.4 GHz/5 GHz), Wi-Fi Direct , Wi-Fi 802.11 a/b/g/n/ac/ax, 6 GHz'),
        createData('Xem phim', '	3GP, AVI, MP4, MKV, FLV'),
        createData('Có thuế VAT', '	Có')

    ]
    return (
        <Box component="ul" className=' mb-8' >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="additional information" value="1" />
                        <Tab label="description" value="2" />
                        <Tab label="reviews" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <h1 className='text-2xl my-2 uppercase'>thông tin chi tiết</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell className='w-44 bg-slate-200' component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    )
}

export default ProductDetailMenu