import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ImagePicker, Toast, Form, Button, Cell, Dialog } from '@pingtou/rn-vant';
import { Fire } from '@pingtou/rn-vant-icons';
import { DemoBlock } from '../../components';
import { GlobalContext } from '../../GlobalContext';

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    fileName: '图片名称',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    fileName: '图片名称',
  },
];

const ImagePickerExample = () => {
  const { themeVars } = useContext(GlobalContext);

  return (
    <View style={{ backgroundColor: themeVars.background_2 }}>
      <DemoBlock title="基础用法" inset>
        <ImagePicker defaultValue={defaultValue} />
      </DemoBlock>
      <DemoBlock title="自动上传" inset>
        <ImagePicker defaultValue={defaultValue} />
      </DemoBlock>
      <DemoBlock title="上传限制" inset>
        <ImagePicker
          multiple
          defaultValue={[defaultValue[0]]}
          maxCount={2}
          maxSize={15 * 1024}
          onOversize={() => Toast.info('文件大小不能超过15kb')}
        />
      </DemoBlock>
      <DemoBlock title="自定义预览" inset>
        <ImagePicker
          defaultValue={defaultValue}
          uploadIcon={<Fire />}
          previewCoverRender={item => (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: '#00000030',
                alignItems: 'center',
              }}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="middle"
                style={{ fontSize: 12, color: '#fff', lineHeight: 24 }}
              >
                {item.fileName}
              </Text>
            </View>
          )}
        />
      </DemoBlock>
      <DemoBlock title="自定义预览大小" inset>
        <ImagePicker defaultValue={defaultValue} previewSize={60} />
      </DemoBlock>
      <DemoBlock title="异步关闭" inset>
        <ImagePicker
          defaultValue={defaultValue}
          onDelete={() => Dialog.confirm({ title: '提示', message: '确认删除?🤔' })}
        />
      </DemoBlock>
      <DemoBlock title="表单中使用" inset>
        <Form>
          <Cell.Group>
            <Form.Item
              rules={{ required: '请上传头像' }}
              label="上传头像"
              name="avatar"
              defaultValue={[{ url: 'https://iili.io/NZiS9e.png' }]}
            >
              <ImagePicker maxCount={1} />
            </Form.Item>
            <Form.Item rules={{ required: '请上传头像' }} label="上传附件" name="files">
              <ImagePicker />
            </Form.Item>
          </Cell.Group>
        </Form>
        <Button type="primary" style={{ marginTop: 20 }}>
          确认
        </Button>
      </DemoBlock>
    </View>
  );
};

export default ImagePickerExample;
