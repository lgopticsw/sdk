# LG VisionLink SDK

혁신적인 센서 기술로 로봇, 자동차, 운전자 모니터링 분야의 미래를 만들어갑니다.

## 🚀 개요

LG Innotek Advanced Sensor SDK는 세 가지 혁신적인 센서 모듈을 제공하여 다양한 산업 분야의 요구사항을 충족합니다:

### 1. **Robot 복합 모듈** 🤖
- **센서**: Stereo + dToF + Radar 통합
- **플랫폼**: Linux Jetson
- **특징**: 
  - 완벽한 3D 환경 인식
  - 실시간 SLAM 지원
  - 장애물 감지 및 경로 계획

### 2. **Under Display Camera** 📷
- **센서**: Infrared Camera + AI 화질 복원
- **플랫폼**: Linux Jetson, Windows
- **특징**:
  - 디스플레이 하단 최적화
  - 야간 촬영 지원
  - 고급 화질 복원 알고리즘

### 3. **운전자 모니터링 모듈** 👁️
- **센서**: ToF + IR + RGB
- **플랫폼**: Windows
- **특징**:
  - 눈 움직임 추적
  - 주의 상태 감지
  - DMS(Driver Monitoring System) 호환

## 📋 요구사항

### Robot 센서 모듈
- NVIDIA Jetson Xavier 이상
- JetPack 5.0 이상
- CUDA 11.4+
- ROS 2 Humble

### Under Display Camera
- Python 3.8+
- OpenCV 4.5+
- PyTorch 1.9+
- Linux 또는 Windows

### DMS (Driver Monitoring System)
- Windows 10/11 (64-bit)
- Visual Studio 2019+
- .NET Framework 4.8+
- CUDA 12.0+

## 🔧 설치

### Robot Sensor (C++)
```bash
git clone https://github.com/LGInnotek/robot-sensor-sdk.git
cd robot-sensor-sdk
mkdir build && cd build
cmake ..
make -j$(nproc)
sudo make install
```

### Under Display Camera (Python)
```bash
git clone https://github.com/LGInnotek/underdisplay-camera-sdk.git
cd underdisplay-camera-sdk
pip install -r requirements.txt
python setup.py install
```

### DMS SDK (C#)
```bash
git clone https://github.com/LGInnotek/dms-sdk.git
cd dms-sdk
mkdir build && cd build
cmake .. -G "Visual Studio 17 2022"
cmake --build . --config Release
cmake --install .
```

## 📚 빠른 시작

### Robot 센서 초기화 (C++)
```cpp
#include "robot_sensor.h"

int main() {
  RobotSensorConfig config;
  config.stereo_resolution = RESOLUTION_1280x720;
  config.dtof_fps = 30;
  config.radar_range = 5.0f;
  
  RobotSensorModule sensor;
  sensor.Initialize(config);
  
  while (true) {
    SensorData data = sensor.GetSensorData(SENSOR_TYPE_STEREO);
    // 데이터 처리...
  }
  return 0;
}
```

### Under Display Camera (Python)
```python
import lginnotek.underdisplay as ud

config = ud.UDCameraConfig()
config.ir_enabled = True
config.quality_enhancement = True

camera = ud.UDCameraModule()
camera.initialize(config)

frame = camera.get_frame(apply_enhancement=True)
enhanced = camera.apply_quality_restoration(frame)
```

### DMS 초기화 (C#)
```csharp
using LGInnotek.DMS;

DMSConfig config = new DMSConfig()
{
  EnableEyeTracking = true,
  EnableFaceRecognition = true
};

DMSModule dms = new DMSModule();
dms.Initialize(config);

Frame frame = camera.CaptureFrame();
DriverState state = dms.DetectDriverState(frame);
```

## 🌐 웹사이트

- **홈페이지**: [index.html](index.html)
- **문서**: [docs.html](docs.html)
- **GitHub**: https://github.com/LGInnotek

## 📖 API 문서

### Robot Sensor API
- `Initialize()` - 센서 초기화
- `GetSensorData()` - 센서 데이터 획득
- `EnableSLAM()` - SLAM 활성화

### Under Display Camera API
- `Initialize()` - 카메라 초기화
- `GetFrame()` - 프레임 획득
- `ApplyQualityRestoration()` - 화질 복원

### DMS API
- `Initialize()` - DMS 초기화
- `DetectDriverState()` - 운전자 상태 감지
- `GetEyeTrackingData()` - 눈 추적 데이터 획득

자세한 내용은 [문서](docs.html#api)를 참조하세요.

## 🤝 기여하기

버그 리포트, 기능 요청, 풀 요청을 환영합니다!

- [이슈 등록](https://github.com/LGInnotek/robot-sensor-sdk/issues)
- [풀 요청](https://github.com/LGInnotek/robot-sensor-sdk/pulls)

## 📄 라이선스

MIT License 또는 Apache 2.0 (각 리포지토리 확인)

## 📞 지원 및 문의

- GitHub Issues: 각 리포지토리의 Issues 탭
- GitHub Discussions: 일반 질문 및 토론
- Email: support@lginnotek.com (추후 공개)

## 🎯 기술 사양

| 기능 | Robot | Under Display | DMS |
|------|-------|----------------|-----|
| 센서 개수 | 3개 | 2개 | 3개 |
| 해상도 | 1280x720 ~ 4K | FHD ~ 4K | VGA ~ 1080p |
| FPS | 30 FPS | 30 FPS | 30 FPS |
| 플랫폼 | Linux Jetson | Linux/Windows | Windows |
| 언어 | C++ | Python | C# |

## 🔄 버전 정보

- **LG VisionLink SDK**: v2.0.0
- **Robot Sensor Module**: v1.2.0
- **Under Display Camera Module**: v1.1.0  
- **DMS Module**: v1.0.5

최종 업데이트: 2026년 7월

---

**LG VisionLink SDK** - 스마트 센서의 미래

